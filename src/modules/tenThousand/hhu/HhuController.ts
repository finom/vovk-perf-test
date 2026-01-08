import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hhu")
export default class HhuController {
  @operation({
    summary: "Get Hhu",
  })
  @get()
  static getHhu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hhu",
  })
  @post("{id}")
  static createHhu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
