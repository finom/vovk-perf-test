import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ihg")
export default class IhgController {
  @operation({
    summary: "Get Ihg",
  })
  @get()
  static getIhg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ihg",
  })
  @post("{id}")
  static createIhg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
