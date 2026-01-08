import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("efk")
export default class EfkController {
  @operation({
    summary: "Get Efk",
  })
  @get()
  static getEfk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Efk",
  })
  @post("{id}")
  static createEfk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
