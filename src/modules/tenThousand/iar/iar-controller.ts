import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iar")
export default class IarController {
  @operation({
    summary: "Get Iar",
  })
  @get()
  static getIar = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iar",
  })
  @post("{id}")
  static createIar = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
