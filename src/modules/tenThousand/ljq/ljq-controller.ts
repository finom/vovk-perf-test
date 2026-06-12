import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ljq")
export default class LjqController {
  @operation({
    summary: "Get Ljq",
  })
  @get()
  static getLjq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ljq",
  })
  @post("{id}")
  static createLjq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
