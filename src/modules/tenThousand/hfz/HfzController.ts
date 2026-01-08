import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hfz")
export default class HfzController {
  @operation({
    summary: "Get Hfz",
  })
  @get()
  static getHfz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hfz",
  })
  @post("{id}")
  static createHfz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
