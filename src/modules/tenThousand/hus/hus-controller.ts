import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hus")
export default class HusController {
  @operation({
    summary: "Get Hus",
  })
  @get()
  static getHus = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hus",
  })
  @post("{id}")
  static createHus = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
