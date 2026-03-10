import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ljn")
export default class LjnController {
  @operation({
    summary: "Get Ljn",
  })
  @get()
  static getLjn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ljn",
  })
  @post("{id}")
  static createLjn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
