import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hne")
export default class HneController {
  @operation({
    summary: "Get Hne",
  })
  @get()
  static getHne = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hne",
  })
  @post("{id}")
  static createHne = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
