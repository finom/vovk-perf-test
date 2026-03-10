import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hub")
export default class HubController {
  @operation({
    summary: "Get Hub",
  })
  @get()
  static getHub = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hub",
  })
  @post("{id}")
  static createHub = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
