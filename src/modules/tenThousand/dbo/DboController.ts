import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dbo")
export default class DboController {
  @operation({
    summary: "Get Dbo",
  })
  @get()
  static getDbo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dbo",
  })
  @post("{id}")
  static createDbo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
