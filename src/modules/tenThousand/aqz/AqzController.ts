import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aqz")
export default class AqzController {
  @operation({
    summary: "Get Aqz",
  })
  @get()
  static getAqz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aqz",
  })
  @post("{id}")
  static createAqz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
