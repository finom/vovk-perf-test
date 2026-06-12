import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("izi")
export default class IziController {
  @operation({
    summary: "Get Izi",
  })
  @get()
  static getIzi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Izi",
  })
  @post("{id}")
  static createIzi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
