import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lbu")
export default class LbuController {
  @operation({
    summary: "Get Lbu",
  })
  @get()
  static getLbu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lbu",
  })
  @post("{id}")
  static createLbu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
