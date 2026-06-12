import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nav")
export default class NavController {
  @operation({
    summary: "Get Nav",
  })
  @get()
  static getNav = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nav",
  })
  @post("{id}")
  static createNav = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
