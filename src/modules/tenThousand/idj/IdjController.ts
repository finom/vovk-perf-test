import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("idj")
export default class IdjController {
  @operation({
    summary: "Get Idj",
  })
  @get()
  static getIdj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Idj",
  })
  @post("{id}")
  static createIdj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
