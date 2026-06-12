import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iuz")
export default class IuzController {
  @operation({
    summary: "Get Iuz",
  })
  @get()
  static getIuz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iuz",
  })
  @post("{id}")
  static createIuz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
