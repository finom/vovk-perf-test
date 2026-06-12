import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("zu")
export default class ZuController {
  @operation({
    summary: "Get Zu",
  })
  @get()
  static getZu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Zu",
  })
  @post("{id}")
  static createZu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
