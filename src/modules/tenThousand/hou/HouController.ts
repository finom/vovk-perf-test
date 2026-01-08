import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hou")
export default class HouController {
  @operation({
    summary: "Get Hou",
  })
  @get()
  static getHou = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hou",
  })
  @post("{id}")
  static createHou = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
