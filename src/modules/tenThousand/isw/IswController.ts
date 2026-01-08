import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("isw")
export default class IswController {
  @operation({
    summary: "Get Isw",
  })
  @get()
  static getIsw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Isw",
  })
  @post("{id}")
  static createIsw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
