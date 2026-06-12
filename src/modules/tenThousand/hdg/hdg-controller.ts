import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hdg")
export default class HdgController {
  @operation({
    summary: "Get Hdg",
  })
  @get()
  static getHdg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hdg",
  })
  @post("{id}")
  static createHdg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
