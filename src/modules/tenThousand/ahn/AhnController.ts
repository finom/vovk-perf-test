import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ahn")
export default class AhnController {
  @operation({
    summary: "Get Ahn",
  })
  @get()
  static getAhn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ahn",
  })
  @post("{id}")
  static createAhn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
