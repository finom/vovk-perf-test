import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("itx")
export default class ItxController {
  @operation({
    summary: "Get Itx",
  })
  @get()
  static getItx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Itx",
  })
  @post("{id}")
  static createItx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
