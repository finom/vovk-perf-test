import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hup")
export default class HupController {
  @operation({
    summary: "Get Hup",
  })
  @get()
  static getHup = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hup",
  })
  @post("{id}")
  static createHup = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
