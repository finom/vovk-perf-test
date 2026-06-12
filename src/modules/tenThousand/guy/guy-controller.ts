import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("guy")
export default class GuyController {
  @operation({
    summary: "Get Guy",
  })
  @get()
  static getGuy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Guy",
  })
  @post("{id}")
  static createGuy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
