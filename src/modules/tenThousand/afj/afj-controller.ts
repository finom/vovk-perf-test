import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("afj")
export default class AfjController {
  @operation({
    summary: "Get Afj",
  })
  @get()
  static getAfj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Afj",
  })
  @post("{id}")
  static createAfj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
