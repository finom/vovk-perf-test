import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bwj")
export default class BwjController {
  @operation({
    summary: "Get Bwj",
  })
  @get()
  static getBwj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bwj",
  })
  @post("{id}")
  static createBwj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
