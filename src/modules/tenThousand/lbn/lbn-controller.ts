import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lbn")
export default class LbnController {
  @operation({
    summary: "Get Lbn",
  })
  @get()
  static getLbn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lbn",
  })
  @post("{id}")
  static createLbn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
