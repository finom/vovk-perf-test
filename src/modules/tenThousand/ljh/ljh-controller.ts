import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ljh")
export default class LjhController {
  @operation({
    summary: "Get Ljh",
  })
  @get()
  static getLjh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ljh",
  })
  @post("{id}")
  static createLjh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
