import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("icg")
export default class IcgController {
  @operation({
    summary: "Get Icg",
  })
  @get()
  static getIcg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Icg",
  })
  @post("{id}")
  static createIcg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
