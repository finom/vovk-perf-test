import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("erz")
export default class ErzController {
  @operation({
    summary: "Get Erz",
  })
  @get()
  static getErz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Erz",
  })
  @post("{id}")
  static createErz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
