import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ied")
export default class IedController {
  @operation({
    summary: "Get Ied",
  })
  @get()
  static getIed = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ied",
  })
  @post("{id}")
  static createIed = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
