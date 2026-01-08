import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("izk")
export default class IzkController {
  @operation({
    summary: "Get Izk",
  })
  @get()
  static getIzk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Izk",
  })
  @post("{id}")
  static createIzk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
