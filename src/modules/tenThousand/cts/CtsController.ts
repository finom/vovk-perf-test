import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cts")
export default class CtsController {
  @operation({
    summary: "Get Cts",
  })
  @get()
  static getCts = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cts",
  })
  @post("{id}")
  static createCts = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
