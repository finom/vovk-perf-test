import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("czj")
export default class CzjController {
  @operation({
    summary: "Get Czj",
  })
  @get()
  static getCzj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Czj",
  })
  @post("{id}")
  static createCzj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
