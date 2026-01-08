import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kwz")
export default class KwzController {
  @operation({
    summary: "Get Kwz",
  })
  @get()
  static getKwz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kwz",
  })
  @post("{id}")
  static createKwz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
