import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hfh")
export default class HfhController {
  @operation({
    summary: "Get Hfh",
  })
  @get()
  static getHfh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hfh",
  })
  @post("{id}")
  static createHfh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
