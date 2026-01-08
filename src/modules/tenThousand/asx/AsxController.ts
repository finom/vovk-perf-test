import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("asx")
export default class AsxController {
  @operation({
    summary: "Get Asx",
  })
  @get()
  static getAsx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Asx",
  })
  @post("{id}")
  static createAsx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
