import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fre")
export default class FreController {
  @operation({
    summary: "Get Fre",
  })
  @get()
  static getFre = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fre",
  })
  @post("{id}")
  static createFre = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
