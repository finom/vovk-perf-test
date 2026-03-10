import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("igs")
export default class IgsController {
  @operation({
    summary: "Get Igs",
  })
  @get()
  static getIgs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Igs",
  })
  @post("{id}")
  static createIgs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
