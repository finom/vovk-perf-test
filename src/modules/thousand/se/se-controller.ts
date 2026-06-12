import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("se")
export default class SeController {
  @operation({
    summary: "Get Se",
  })
  @get()
  static getSe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Se",
  })
  @post("{id}")
  static createSe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
