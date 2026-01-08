import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kwc")
export default class KwcController {
  @operation({
    summary: "Get Kwc",
  })
  @get()
  static getKwc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kwc",
  })
  @post("{id}")
  static createKwc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
