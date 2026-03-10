import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bxt")
export default class BxtController {
  @operation({
    summary: "Get Bxt",
  })
  @get()
  static getBxt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bxt",
  })
  @post("{id}")
  static createBxt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
