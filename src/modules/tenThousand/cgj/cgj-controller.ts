import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cgj")
export default class CgjController {
  @operation({
    summary: "Get Cgj",
  })
  @get()
  static getCgj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cgj",
  })
  @post("{id}")
  static createCgj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
