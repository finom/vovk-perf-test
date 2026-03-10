import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("alj")
export default class AljController {
  @operation({
    summary: "Get Alj",
  })
  @get()
  static getAlj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Alj",
  })
  @post("{id}")
  static createAlj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
