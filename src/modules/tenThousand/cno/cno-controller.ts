import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cno")
export default class CnoController {
  @operation({
    summary: "Get Cno",
  })
  @get()
  static getCno = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cno",
  })
  @post("{id}")
  static createCno = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
