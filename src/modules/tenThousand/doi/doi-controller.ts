import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("doi")
export default class DoiController {
  @operation({
    summary: "Get Doi",
  })
  @get()
  static getDoi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Doi",
  })
  @post("{id}")
  static createDoi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
