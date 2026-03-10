import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iba")
export default class IbaController {
  @operation({
    summary: "Get Iba",
  })
  @get()
  static getIba = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iba",
  })
  @post("{id}")
  static createIba = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
