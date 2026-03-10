import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kit")
export default class KitController {
  @operation({
    summary: "Get Kit",
  })
  @get()
  static getKit = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kit",
  })
  @post("{id}")
  static createKit = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
