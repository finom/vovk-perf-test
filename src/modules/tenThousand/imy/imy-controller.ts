import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("imy")
export default class ImyController {
  @operation({
    summary: "Get Imy",
  })
  @get()
  static getImy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Imy",
  })
  @post("{id}")
  static createImy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
