import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lri")
export default class LriController {
  @operation({
    summary: "Get Lri",
  })
  @get()
  static getLri = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lri",
  })
  @post("{id}")
  static createLri = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
