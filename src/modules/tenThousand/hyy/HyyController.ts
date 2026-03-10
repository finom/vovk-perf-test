import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hyy")
export default class HyyController {
  @operation({
    summary: "Get Hyy",
  })
  @get()
  static getHyy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hyy",
  })
  @post("{id}")
  static createHyy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
