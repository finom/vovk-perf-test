import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gel")
export default class GelController {
  @operation({
    summary: "Get Gel",
  })
  @get()
  static getGel = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gel",
  })
  @post("{id}")
  static createGel = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
