import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kwn")
export default class KwnController {
  @operation({
    summary: "Get Kwn",
  })
  @get()
  static getKwn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kwn",
  })
  @post("{id}")
  static createKwn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
