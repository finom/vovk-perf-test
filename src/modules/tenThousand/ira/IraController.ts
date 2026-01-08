import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ira")
export default class IraController {
  @operation({
    summary: "Get Ira",
  })
  @get()
  static getIra = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ira",
  })
  @post("{id}")
  static createIra = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
